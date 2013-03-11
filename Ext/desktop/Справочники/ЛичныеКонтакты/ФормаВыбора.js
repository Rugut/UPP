Ext.define('Справочники.ЛичныеКонтакты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 548,
	iconCls: 'bogus',
	title: 'Личные контакты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:320px;',
			height: 320,width: 532,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
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