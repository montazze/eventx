window.Materialize={},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){return"fixed"===$(this).css("position")?(n=!0,!1):void 0}),n};var Vel;Vel=$?$.Velocity:Velocity;