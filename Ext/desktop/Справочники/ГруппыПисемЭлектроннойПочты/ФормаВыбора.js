Ext.define('Справочники.ГруппыПисемЭлектроннойПочты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 456,
	iconCls: 'bogus',
	title: 'Справочник Группы писем электронной почты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:440px;height:280px;',
			height: 280,width: 440,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:25px;',
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