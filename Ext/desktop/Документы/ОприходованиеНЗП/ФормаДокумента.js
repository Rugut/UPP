Ext.define('Документы.ОприходованиеНЗП.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оприходование незавершенного производства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:19px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:337px;width:88px;height:19px;text-align:left;',
		},
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:337px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
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
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:501px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:636px;height:177px;',
			height: 177,width: 636,
			items:
			[
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:121px;',
			height: 121,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика номенклатуры',
					width:'200',
				},
				{
					text:'Серия номенклатуры',
					width:'200',
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
					text:'Количество',
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
					text:'Цена',
					width:'68',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Сумма (регл.)',
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
					text:'Статья затрат',
					width:'100',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетКт',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКт',
			style: 'position:absolute;left:90px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:90px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:90px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:90px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКтНУ',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКтНУ',
			style: 'position:absolute;left:90px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1',
			style: 'position:absolute;left:90px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2',
			style: 'position:absolute;left:90px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3',
			style: 'position:absolute;left:90px;top:78px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
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
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:313px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:313px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:652px;height:25px;',
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
					text:'ОК',
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
			name: 'НадписьТипСтоимости',
			text: 'Тип стоимости:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипСтоимости',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:103px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:573px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокИнвентаризация',
			text: 'Инвентаризация:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Инвентаризация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
	]
});