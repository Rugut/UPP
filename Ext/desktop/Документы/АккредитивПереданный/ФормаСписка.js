Ext.define('Документы.АккредитивПереданный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:756px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Аккредитивы переданные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:740px;height:220px;',
			height: 220,width: 740,
			columns:
			[
				{
					text:' ',
					width:'20',
				},
				{
					text:'ОУ',
					width:'21',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'19',
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
					width:'130',
				},
				{
					text:'Сумма документа',
					width:'119',
				},
				{
					text:'Счет организации',
					width:'200',
				},
				{
					text:'Контрагент',
					width:'200',
				},
				{
					text:'Организация',
					width:'200',
				},
				{
					text:'Подразделение',
					width:'171',
				},
				{
					text:'Ответственный',
					width:'200',
				},
				{
					text:'Комментарий',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:756px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});