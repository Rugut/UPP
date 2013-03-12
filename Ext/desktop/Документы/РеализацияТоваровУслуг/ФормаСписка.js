Ext.define('Документы.РеализацияТоваровУслуг.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реализации товаров и услуг',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:' ',
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
					text:'Вид операции',
					width:'140',
				},
				{
					text:'Вид передачи',
					width:'120',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'50',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Сделка',
					width:'120',
				},
				{
					text:'Склад',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'115',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Состояние ЭД',
					width:'107',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Отправить по эл. почте',
				},
				{
					text:'Список электро��ных документов',
				},
				'-',
				{
					text:'Оформить документы',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'В файл',
				},
				{
					text:'Открыть актуальный электронный документ',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Выгрузить в файл',
				},
				{
					text:'Сформировать, подписать и отправить',
				},
				{
					text:'Сформировать новый электронный документ',
				},
				'-',
				{
					text:'Отправить по эл. почте',
				},
				'-',
			]
		},
	]
});