Ext.define('Документы.АктуализацияБюджетов.ФормаПереносТранзакций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:626px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос транзакций на следующие периоды',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:626px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:610px;height:279px;',
			height: 279,width: 610,
			columns:
			[
				{
					text:'N',
					width:'21',
				},
				{
					text:'Переносить транзакцию',
					width:'28',
				},
				{
					text:'Установка периода',
					width:'115',
				},
				{
					text:'Период',
					width:'118',
				},
				{
					text:'Статья оборотов',
					width:'147',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'ЦФО',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Количество',
					width:'89',
				},
				{
					text:'Сумма в валюте',
					width:'89',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:610px;height:25px;',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
				{
					text:'Заполнить',
				},
			]
		},
	]
});