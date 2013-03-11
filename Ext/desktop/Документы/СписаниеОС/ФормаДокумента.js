Ext.define('Документы.СписаниеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 689,
	iconCls: 'bogus',
	title: 'Списание ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:337px;width:587px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:361px;width:587px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:148px;width:673px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьДляСписка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:172px;width:673px;height:160px;',
			height: 160,width: 673,
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
					text:'СписаноНаЗатраты',
				},
				{
					text:'СписаноНаЗатратыБУ',
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
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКтНУ',
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
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:689px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаСписания',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияБУ',
			style: 'position:absolute;left:416px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНУ',
			style: 'position:absolute;left:416px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоБУ',
			style: 'position:absolute;left:561px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ',
			style: 'position:absolute;left:561px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:416px;top:105px;width:265px;height:19px;',
		},
	]
});