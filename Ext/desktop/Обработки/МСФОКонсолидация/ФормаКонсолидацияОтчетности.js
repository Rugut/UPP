Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияОтчетности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:778px;height:455px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Консолидация отчетности по МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:430px;width:778px;height:25px;',
			items:
			[
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:762px;height:414px;',
			height: 414,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период консолидации отчетности:',
			style: 'position:absolute;left:0px;top:21px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:182px;top:21px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Фирма',
					width:'220',
				},
				{
					text:'Баланс',
					width:'60',
				},
				{
					text:'Пр.и уб.',
					width:'60',
				},
				{
					text:'ДДС',
					width:'60',
				},
				{
					text:'Дв.кап.',
					width:'60',
				},
				{
					text:'Уч.пол.',
					width:'60',
				},
				{
					text:'Прим.',
					width:'60',
				},
				{
					text:'Вкл.',
					width:'60',
				},
				{
					text:'Способ конс.',
					width:'120',
				},
				{
					text:'БалансСсылка',
					width:'21',
				},
				{
					text:'ПрибылиИУбыткиСсылка',
					width:'21',
				},
				{
					text:'ДДССсылка',
					width:'21',
				},
				{
					text:'ДвижениеКапиталаСсылка',
					width:'21',
				},
				{
					text:'УчетнаяПолитикаСсылка',
					width:'21',
				},
				{
					text:'ПримечанияСсылка',
					width:'21',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Обновить',
			text: 'Обновить',
			style: 'position:absolute;left:309px;top:21px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:214px;width:762px;height:200px;',
			height: 200,width: 762,
			columns:
			[
				{
					text:'Фирма',
					width:'220',
				},
				{
					text:'Головная',
					width:'60',
				},
				{
					text:'Товары (на начало)',
					width:'104',
				},
				{
					text:'Товары (оборот)',
					width:'104',
				},
				{
					text:'Материалы (на начало)',
					width:'100',
				},
				{
					text:'Материалы (оборот)',
					width:'100',
				},
				{
					text:'НЗП (на начало)',
					width:'100',
				},
				{
					text:'НЗП (оборот)',
					width:'100',
				},
				{
					text:'Полуфабрикаты (на начало)',
					width:'100',
				},
				{
					text:'Полуфабрикаты (оборот)',
					width:'100',
				},
				{
					text:'ГП (на начало)',
					width:'100',
				},
				{
					text:'ГП (оборот)',
					width:'100',
				},
				{
					text:'Товары отгр. (на начало)',
					width:'100',
				},
				{
					text:'Товары отгр. (оборот)',
					width:'100',
				},
				{
					text:'ОС (на начало)',
					width:'100',
				},
				{
					text:'ОС (оборот)',
					width:'100',
				},
				{
					text:'НМА (на начало)',
					width:'100',
				},
				{
					text:'НМА (оборот)',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'При двойном щелчке мышью по ячейке, отмеченной "флажком" откроется форма соответствующего отчета.',
			style: 'position:absolute;left:0px;top:171px;width:762px;height:15px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'В таблицах указаны организации, которые выдали или получили долгосрочные займы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон5',
			text: 'Итого сумма взаимных займов за :',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон5',
			style: 'position:absolute;left:222px;top:186px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред5',
			text: 'Итого сумма взаимных займов за :',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред5',
			style: 'position:absolute;left:222px;top:375px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'В таблицах указаны организации, которые выдали или получили краткосрочные займы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон6',
			text: 'Итого сумма взаимных займов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон6',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред6',
			text: 'Итого сумма взаимных займов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред6',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'В таблицах указаны организации, которые выдали или получили долгосрочные авансы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'В таблицах указаны организации, которые выдали или получили краткосрочные авансы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
					]
				},
				{
					title:'Страница4',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоКон7',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон7',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред7',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред7',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница5',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоКон8',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон8',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред8',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред8',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница6',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'В таблицах указаны организации, которые выдали или получили выручку друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон11',
			text: 'Итого сумма взаимной выручки за ',
			style: 'position:absolute;left:0px;top:197px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон11',
			style: 'position:absolute;left:222px;top:197px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:243px;width:762px;height:127px;',
			height: 127,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред11',
			text: 'Итого сумма взаимной выручки за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред11',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница7',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'В таблицах указаны организации, которые выдали или получили себестоимость друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон12',
			text: 'Итого сумма взаимной себест. за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон12',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред12',
			text: 'Итого сумма взаимной себест. за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред12',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница8',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'В таблицах указаны организации, которые выдали или получили дивиденды друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон21',
			text: 'Итого сумма взаимных дивидендов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон21',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:137px;',
			height: 137,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'ИтогоПред21',
			text: 'Итого сумма взаимных дивидендов за ',
			style: 'position:absolute;left:0px;top:374px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред21',
			style: 'position:absolute;left:222px;top:374px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница9',
					items:
					[
		{
			xtype: 'label',
			name: 'ИтогоКон41',
			text: 'Текущая дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:22px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон40',
			style: 'position:absolute;left:245px;top:22px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон42',
			text: 'Текущая кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:46px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон41',
			style: 'position:absolute;left:245px;top:46px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон43',
			text: 'Долгосрочная дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:70px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон42',
			style: 'position:absolute;left:245px;top:70px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон44',
			text: 'Долгосрочная кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:94px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон43',
			style: 'position:absolute;left:245px;top:94px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон45',
			text: 'Текущая дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:174px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред40',
			style: 'position:absolute;left:245px;top:174px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон46',
			text: 'Текущая кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:198px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред41',
			style: 'position:absolute;left:245px;top:198px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон47',
			text: 'Долгосрочная дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:222px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред42',
			style: 'position:absolute;left:245px;top:222px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон48',
			text: 'Долгосрочная кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:246px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред43',
			style: 'position:absolute;left:245px;top:246px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница10',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:393px;',
			height: 393,width: 762,
			columns:
			[
				{
					text:'Отчет',
					width:'524',
				},
				{
					text:'Ссылка',
					width:'21',
				},
			]
		},
					]
				},
			]
		},
	]
});