Ext.define('Документы.МодернизацияОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Модернизация ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'УУ',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
					width:'20',
				},
				{
					text:'Дата',
					width:'132',
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
					text:'Объект строительства',
					width:'120',
				},
				{
					text:'Вид операций с основными средствами',
					width:'120',
				},
				{
					text:'Стоимость УУ',
					width:'80',
				},
				{
					text:'Стоимость БУ',
					width:'80',
				},
				{
					text:'Стоимость БУ (Хоз. способ)',
					width:'80',
				},
				{
					text:'Стоимость НУ',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});