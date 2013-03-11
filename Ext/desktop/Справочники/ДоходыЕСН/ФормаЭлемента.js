Ext.define('Справочники.ДоходыЕСН.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 148,width: 406,
	iconCls: 'bogus',
	title: 'Способы отражения доходов в учете ЕСН',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:406px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:390px;height:55px;',
			height: 55,width: 390,
			items:
			[
				{
					title:'НеПредопределенный',
					items:
					[
					]
				},
				{
					title:'Предопределенный',
					items:
					[
					]
				},
			]
		},
	]
});