Ext.define('Документы.АктОбОказанииПроизводственныхУслуг.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акты об оказании производственных услуг',
	
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
					text:'Сумма',
					width:'85',
				},
				{
					text:'Валюта',
					width:'70',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
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
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Сформировать, подписать и отправить',
				},
				{
					text:'Сформировать новый электронный документ',
				},
				'-',
				'-',
				{
					text:'Открыть актуальный электронный документ',
				},
				'-',
				{
					text:'Список электронных документов',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
			]
		},
	]
});