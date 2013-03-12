Ext.define('Документы.ИнкассовоеПоручениеПереданное.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:756px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инкассовые поручения переданные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:740px;height:380px;',
			height: 380,width: 740,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'ОУ',
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
					text:'Дата оплаты',
					width:'80',
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
					text:'Счет организации',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'143',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:756px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Дт/кт',
				},
			]
		},
	]
});