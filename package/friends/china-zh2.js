(function () {
    var uStates = {};
    d3.json('0312.json', function (error, svgData) {
        var uStatePaths = svgData;
        uStates.draw = function (id, data, toolTip) {
            function mouseOver(d) {
                if(typeof (d.friends)==='undefined'||d.friends.length<=0){
                    return;
                }
                d3.select("#tooltip").transition().duration(200).style("opacity", .9);

                d3.select("#tooltip").html(toolTip(d.n, data[d.id],d))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            }

            function mouseOut() {
                //d3.select("#tooltip").transition().duration(500).style("opacity", 0);
            }


            d3.select(id).selectAll(".state")
                .data(uStatePaths).enter().append("path").attr("class", "state").attr("d", function (d) {
                    return d.d;
                })
                .style("fill", function (d) {
                    return d.color;
                })
                .on("mouseover", mouseOver).on("mouseout", mouseOut);
        }
        window.uStates = uStates;
        function tooltipHtml(n, d,data) {
            var friends='';
            if(typeof (data.friends)!='undefined'){
                friends=data.friends;
            }
            return "<h4>" + n + "</h4><table>" +
                "<tr style='white-space: nowrap;'><td>基友：</td><td><a  style='text-decoration:inherit;color: #2587B6;' href='#' >" + friends + "</a></td></tr>" +
                "</table>";
        }

        var totalFriends=0;
        uStatePaths.forEach(function (d) {
                var friendCount =0;
            //debugger;
                if(d.friends){friendCount=d.friends.length;}
            totalFriends+=friendCount;
                  //var  mid = Math.round(100 * Math.random()),
                  //  high = Math.round(100 * Math.random());
                //sampleData[d] = {
                //    //low: d3.min([low, mid, high]), high: d3.max([low, mid, high]), friends: d
                //    //avg: Math.round((low + mid + high) / 3),
                //    color: d3.interpolate("#32aae2", "#edf0f5")(low / 100)
                //};
            d.color=d3.interpolate("#edf0f5","#32aae2")(friendCount / 10);
            });
        d3.select("#total").html('总计有'+totalFriends+'个认识的人' );
        //'.涛涛，祥子坐标未知');
        /* draw states on id #statesvg */
        uStates.draw("#statesvg", uStatePaths, tooltipHtml);
    });



})();