Ext.define('Справочники.ТиповыеАнкеты.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 434,
	iconCls: 'bogus',
	title: 'Группы типовых анкет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:280px;',
			height: 280,width: 418,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
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