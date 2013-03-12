Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентные операции налогового учета (по налогу на прибыль)',
	
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
					width:'106',
				},
				{
					text:'Номер',
					width:'59',
				},
				{
					text:'За период',
					width:'75',
				},
				{
					text:'Организация',
					width:'176',
				},
				{
					text:'Нормирование расходов на рекламу',
					width:'70',
				},
				{
					text:'Нормиров. расходов на добр. страх.',
					width:'70',
				},
				{
					text:'Нормиров. представи- тельских расходов',
					width:'70',
				},
				{
					text:'Распред. расходов по видам деят.',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Перейти',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Печать по умолчанию',
				},
			]
		},
	]
});