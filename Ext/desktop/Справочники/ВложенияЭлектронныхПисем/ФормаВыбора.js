Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вложения электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:488px;height:280px;',
			height: 280,width: 488,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Электронное письмо',
					width:'120',
				},
				{
					text:'Имя файла',
					width:'120',
				},
				{
					text:'Описание',
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
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});