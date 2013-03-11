Ext.define('Обработки.ИзменениеНастроекУчета.ВестиРеглУчетРасчетовСПерсоналомСводно',
	{
	extend: 'Ext.window.Window',
	height: 169,width: 400,
	iconCls: 'bogus',
	title: 'Установка параметра учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:144px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});