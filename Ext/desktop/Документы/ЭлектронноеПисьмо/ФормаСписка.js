Ext.define('Документы.ЭлектронноеПисьмо.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:334px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронные письма',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:293px;',
			height: 293,width: 764,
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
					width:'92',
				},
				{
					text:'Дата отправления',
					width:'128',
				},
				{
					text:'Дата транспорта',
					width:'134',
				},
				{
					text:'От кого',
					width:'142',
				},
				{
					text:'Кому',
					width:'118',
				},
				{
					text:'Тема',
					width:'129',
				},
				{
					text:'Номер',
					width:'90',
				},
				{
					text:'Учетная запись',
					width:'157',
				},
				{
					text:'Ответственный',
					width:'118',
				},
				{
					text:'Основание',
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
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				'-',
					]
				},
			]
		},
	]
});