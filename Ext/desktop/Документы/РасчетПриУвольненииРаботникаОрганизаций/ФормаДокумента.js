Ext.define('Документы.РасчетПриУвольненииРаботникаОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 682,
	iconCls: 'bogus',
	title: 'Расчет при увольнении сотрудника',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:682px;height:25px;',
			items:
			[
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
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:578px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:666px;height:377px;',
			height: 377,width: 666,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУвольнения',
			style: 'position:absolute;left:71px;top:52px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовВыходногоПособия',
			style: 'position:absolute;left:230px;top:207px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовКомпенсацииУдержанияОтпуска',
			style: 'position:absolute;left:355px;top:106px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовСохраненияСреднегоЗаработка',
			style: 'position:absolute;left:230px;top:232px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:71px;top:28px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаОтпуска',
			style: 'position:absolute;left:516px;top:106px;width:142px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодС',
			style: 'position:absolute;left:126px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:232px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:268px;width:82px;height:71px;',
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:652px;height:283px;',
			height: 283,width: 652,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Размер',
				},
				{
					text:'Результат',
				},
				{
					text:'Сторно',
				},
				{
					text:'ОплаченоДнейЧасов',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаНачало',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаОкончание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'РассчитатьНачисления',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:66px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
			]
		},
					]
				},
				{
					title:'РасчетСреднего',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:652px;height:263px;',
			height: 263,width: 652,
			items:
			[
				{
					title:'РасчетСреднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие14',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:652px;height:218px;',
			height: 218,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
					]
				},
				{
					title:'РасчетСреднегоДляОтпуска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:652px;height:218px;',
			height: 218,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
			]
		},
					]
				},
				{
					title:'ОбаРасчетаСреднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:153px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие12',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие15',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:177px;width:652px;height:86px;',
			height: 86,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:652px;height:86px;',
			height: 86,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:652px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие17',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:42px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:160px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:252px;top:25px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления (удержания)',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:282px;height:25px;',
			items:
			[
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Исправить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:430px;top:490px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:513px;top:490px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});