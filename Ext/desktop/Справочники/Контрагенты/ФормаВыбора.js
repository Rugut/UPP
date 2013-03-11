Ext.define('Справочники.Контрагенты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 684,
	iconCls: 'bogus',
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:684px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтборПоМенеджеру',
				},
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:668px;height:280px;',
			height: 280,width: 668,
			items:
			[
				{
					title:'СписокВыбора',
				},
				{
					title:'СписокВыбораПоПользователю',
				},
			]
		},
	]
});