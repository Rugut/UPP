Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительная информация',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:220px;',
			height: 220,width: 700,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Объект',
					width:'120',
				},
				{
					text:'Вид данных',
					width:'120',
				},
				{
					text:'Имя файла',
					width:'220',
				},
				{
					text:'Описание',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
			]
		},
	]
});