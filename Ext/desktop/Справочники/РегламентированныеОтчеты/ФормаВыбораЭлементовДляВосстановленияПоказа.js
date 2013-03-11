Ext.define('Справочники.РегламентированныеОтчеты.ФормаВыбораЭлементовДляВосстановленияПоказа',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 550,
	iconCls: 'bogus',
	title: 'Скрытые отчеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:550px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:36px;width:534px;height:292px;',
			height: 292,width: 534,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:10px;width:534px;height:25px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
	]
});