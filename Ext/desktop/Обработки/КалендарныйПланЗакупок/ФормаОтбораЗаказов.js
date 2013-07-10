Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:557px;height:270px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отбор',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:541px;height:226px;',
			height: 226,width: 541,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент',
			style: 'position:absolute;left:6px;top:56px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеКонтрагент',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:56px;width:238px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура',
			style: 'position:absolute;left:6px;top:6px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеДатаПотребности',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:131px;width:238px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеДатаПотребностиНач',
			width: 118,
			height: 19,
			style: 'position:absolute;left:295px;top:131px;width:118px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеДатаПотребностиКон',
			width: 118,
			height: 19,
			style: 'position:absolute;left:415px;top:131px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеНоменклатура',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:6px;width:238px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказ поставщику',
			style: 'position:absolute;left:6px;top:81px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеЗаказПоставщику',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата потребности',
			style: 'position:absolute;left:6px;top:131px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеКоличествоПотребности',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:156px;width:238px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеКоличествоПотребностиНач',
			style: 'position:absolute;left:295px;top:156px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеКоличествоПотребностиКон',
			style: 'position:absolute;left:415px;top:156px;width:118px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Количество потребности',
			style: 'position:absolute;left:6px;top:156px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеКоличествоЗаказов',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:181px;width:238px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеКоличествоЗаказовНач',
			style: 'position:absolute;left:295px;top:181px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеКоличествоЗаказовКон',
			style: 'position:absolute;left:415px;top:181px;width:118px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Количество заказов',
			style: 'position:absolute;left:6px;top:181px;width:139px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:6px;width:143px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:56px;width:143px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:81px;width:143px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:131px;width:143px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:156px;width:143px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:181px;width:143px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Характеристика номенклатуры',
			style: 'position:absolute;left:6px;top:31px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеХарактеристикаНоменклатуры',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:31px;width:238px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:31px;width:143px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказ покупателя',
			style: 'position:absolute;left:6px;top:106px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеЗаказПокупателя',
			width: 238,
			height: 19,
			style: 'position:absolute;left:295px;top:106px;width:238px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:106px;width:143px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать не выполненные заказы покупателей',
			style: 'position:absolute;left:6px;top:26px;width:266px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать не выполненные даты потребности',
			style: 'position:absolute;left:6px;top:6px;width:252px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать измененные заказы',
			style: 'position:absolute;left:6px;top:69px;width:176px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать новые заказы',
			style: 'position:absolute;left:6px;top:88px;width:144px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать новые и измененные заказы',
			style: 'position:absolute;left:6px;top:50px;width:222px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:8px;top:240px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:94px;top:240px;width:80px;height:22px;',
		},
		],
	}],
	dockedItems:
	[
	]
});