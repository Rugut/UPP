Ext.define('Документы.ЭлектронноеПисьмо.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронные письма',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:309px;',
			height: 309,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата создания',
					width:'98',
				},
				{
					text:'Дата отправления',
					width:'130',
				},
				{
					text:'Дата транспорта',
					width:'130',
				},
				{
					text:'От кого',
					width:'120',
				},
				{
					text:'Кому',
					width:'112',
				},
				{
					text:'Тема',
					width:'126',
				},
				{
					text:'Номер',
					width:'79',
				},
				{
					text:'Учетная запись',
					width:'122',
				},
				{
					text:'Ответственный',
					width:'172',
				},
				{
					text:'Основание',
					width:'86',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Выбрать',
				},
				'-',
				'-',
			]
		},
	]
});