Ext.define('Документы.ПодготовкаКПередачеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 723,
	iconCls: 'bogus',
	title: 'Подготовка к передаче ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:200px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:619px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:371px;width:619px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:96px;top:80px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:707px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьДляСписка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:707px;height:194px;',
			height: 194,width: 707,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ИнвентарныйНомер',
				},
				{
					text:'Стоимость',
				},
				{
					text:'ОстСтоимость',
				},
				{
					text:'Амортизация',
				},
				{
					text:'АмортизацияЗаМесяц',
				},
				{
					text:'СтоимостьБУ',
				},
				{
					text:'ОстСтоимостьБУ',
				},
				{
					text:'АмортизацияБУ',
				},
				{
					text:'АмортизацияЗаМесяцБУ',
				},
				{
					text:'СтоимостьНУ',
				},
				{
					text:'ОстСтоимостьНУ',
				},
				{
					text:'АмортизацияНУ',
				},
				{
					text:'АмортизацияЗаМесяцНУ',
				},
				{
					text:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:723px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:432px;top:80px;width:283px;height:19px;',
		},
	]
});