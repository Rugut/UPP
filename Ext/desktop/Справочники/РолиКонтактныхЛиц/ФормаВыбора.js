Ext.define('Справочники.РолиКонтактныхЛиц.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 424,
	iconCls: 'bogus',
	title: 'Роли контактных лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:408px;height:280px;',
			height: 280,width: 408,
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
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
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