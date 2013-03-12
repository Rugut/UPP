Ext.define('Документы.ВозвратТоваровОтПокупателя.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Возвраты товаров от покупателя',
	
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
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Вид поступления',
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
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Отразить в книге покупок',
					width:'96',
				},
				{
					text:'Получен счет-фактура',
					width:'96',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'120',
				},
				{
					text:'Организация',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});