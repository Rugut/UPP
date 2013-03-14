Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаОтраженияВУчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:344px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение в учете пособия по документу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:319px;width:644px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'документом Отражение в учете, в конце месяца',
			style: 'position:absolute;left:107px;top:8px;width:296px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по данным текущего документа',
			style: 'position:absolute;left:107px;top:29px;width:296px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Отражать в учете:',
			style: 'position:absolute;left:8px;top:8px;width:98px;height:18px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:156px;width:628px;height:155px;',
			height: 155,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Период начисления',
					width:'116',
				},
				{
					text:'Сумма',
					width:'79',
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'100',
				},
				{
					text:'Счет Дт',
					width:'61',
				},
				{
					text:'Подразделение Дт',
					width:'101',
				},
				{
					text:'Субконто Дт',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'60',
				},
				{
					text:'Подразделение Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'40',
				},
				{
					text:'Код для ЕСН',
					width:'80',
				},
				{
					text:'Счет Дт НУ',
					width:'60',
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Счет Кт НУ',
					width:'60',
				},
				{
					text:'Субконто Кт НУ',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Колонка1',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'100',
				},
				{
					text:'Сумма НУ',
					width:'100',
				},
				{
					text:'Сумма ПР',
					width:'100',
				},
				{
					text:'Сумма ВР',
					width:'100',
				},
				{
					text:'Вид начислений оплаты труда по статье255 НК',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:628px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:54px;width:628px;height:62px;',
			height: 62,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ЕНВД',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодпадаетПодЕНВД',
			style: 'position:absolute;left:153px;top:37px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодпадаетПодЕНВД4',
			text: 'Доля ЕНВД:',
			style: 'position:absolute;left:0px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент4',
			text: '%',
			style: 'position:absolute;left:230px;top:37px;width:19px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'определяется по состоянию на дату события',
			style: 'position:absolute;left:71px;top:19px;width:258px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'определяется по базовым начислениям',
			style: 'position:absolute;left:71px;top:1px;width:258px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'составляет',
			style: 'position:absolute;left:71px;top:38px;width:80px;height:18px;',
		},
					]
				},
			]
		},
	]
});