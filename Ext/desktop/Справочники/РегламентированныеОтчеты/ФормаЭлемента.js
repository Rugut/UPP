Ext.define('Справочники.РегламентированныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 534,width: 470,
	iconCls: 'bogus',
	title: 'Параметры отчета',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:35px;width:368px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникОтчета',
			style: 'position:absolute;left:95px;top:98px;width:367px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:509px;width:470px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:8px;width:368px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникОтчетаФайл',
			style: 'position:absolute;left:94px;top:125px;width:368px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:454px;height:300px;',
			height: 300,width: 454,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:454px;height:41px;',
			height: 41,width: 454,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});