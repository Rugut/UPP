Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вложения электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:280px;',
			height: 280,width: 592,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Электронное письмо',
					width:'120',
				},
				{
					text:'Имя файла',
					width:'220',
				},
				{
					text:'ИДФайла почтового письма',
					width:'120',
				},
				{
					text:'Предмет',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
			]
		},
	]
});