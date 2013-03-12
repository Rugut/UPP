Ext.define('Документы.РегистрацияОплатыНДСВБюджет.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:621px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрации оплаты НДС в бюджет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:605px;height:259px;',
			height: 259,width: 605,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Перейти',
				},
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});