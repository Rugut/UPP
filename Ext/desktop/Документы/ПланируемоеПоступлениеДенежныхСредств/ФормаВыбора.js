Ext.define('Документы.ПланируемоеПоступлениеДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планируемые поступления денежных средств',
	
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
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата поступления',
					width:'80',
				},
				{
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Счет, касса',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Форма оплаты',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});