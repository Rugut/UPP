Ext.define('Справочники.СценарииПланирования.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 590,
	iconCls: 'bogus',
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:176px;top:33px;width:406px;height:259px;',
			height: 259,width: 406,
			columns:
			[
				{
					text:'Картинка',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:590px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});