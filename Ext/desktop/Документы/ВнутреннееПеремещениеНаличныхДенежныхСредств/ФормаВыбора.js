Ext.define('Документы.ВнутреннееПеремещениеНаличныхДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутренние перемещения наличных денежных средств',
	
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
					text:'Касса ',
					width:'120',
				},
				{
					text:'Касса  - получатель',
					width:'120',
				},
				{
					text:'Сумма документа',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Оплачено',
					width:'60',
				},
				{
					text:'Статья движения денежных средств',
					width:'120',
				},
				{
					text:'Ответственный',
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