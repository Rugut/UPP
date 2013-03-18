Ext.define('Документы.ИнвентаризацияНЗП.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация незавершенного производства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:496px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:383px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:383px;width:547px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:336px;top:130px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вводить заказы по строкам',
			style: 'position:absolute;left:336px;top:110px;width:167px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вводить номенклатурные группы по строкам',
			style: 'position:absolute;left:8px;top:110px;width:259px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:8px;top:130px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:143px;top:130px;width:173px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:424px;top:130px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:79px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:574px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:359px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:359px;width:547px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:161px;width:636px;height:190px;',
			height: 190,width: 636,
			items:
			[
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'Заполнить остатками материалов в производстве',
				},
				{
					text:'Заполнить по нормативам (упр. учет)',
				},
				{
					text:'Заполнить по нормативам (регл. учет)',
				},
				{
					text:'Заполнить остатками затрат (упр. учет)',
				},
				{
					text:'Заполнить остатками затрат (регл. учет)',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:622px;height:132px;',
			height: 132,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'142',
				},
				{
					text:'Характеристика номенклатуры',
					width:'107',
				},
				{
					text:'Серия номенклатуры',
					width:'118',
				},
				{
					text:'Статья затрат',
					width:'128',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К.мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'67',
				},
				{
					text:'Факт. количество',
					width:'67',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Количество не использованное в производстве',
					width:'80',
				},
				{
					text:'Номенклатурная группа',
					width:'152',
				},
				{
					text:'Заказ',
					width:'68',
				},
				{
					text:'Счет затрат (БУ)',
					width:'90',
				},
				{
					text:'Счет затрат (НУ)',
					width:'90',
				},
			]
		},
					]
				},
				{
					title:'Прочие затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:133px;',
			height: 133,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья затрат',
					width:'125',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'100',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Сумма',
					width:'81',
				},
				{
					text:'Сумма (БУ)',
					width:'86',
				},
				{
					text:'Сумма (НУ)',
					width:'85',
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по остаткам (упр. и регл. учет)',
				},
				{
					text:'Заполнить по остаткам (упр. учет)',
				},
				{
					text:'Заполнить по остаткам (регл. учет)',
				},
			]
		},
					]
				},
			]
		},
	]
});