Ext.define('Документы.ПриходныйКассовыйОрдер.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Приходные кассовые ордера',
	
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
					text:'Опл',
					width:'27',
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
					width:'120',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Касса',
					width:'120',
				},
				{
					text:'Контрагент, подотчетник, касса ККМ',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Основание',
					width:'0',
				},
				{
					text:'Приложение',
					width:'0',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Чек',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});