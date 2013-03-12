Ext.define('Документы.МодернизацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:655px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Модернизация ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:341px;top:448px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:427px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:448px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:334px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:421px;top:57px;width:226px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:421px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:655px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:655px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:334px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:567px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперацийСОсновнымиСредствами',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРабот',
			text: 'Вид работ:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:334px;top:81px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:421px;top:81px;width:226px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:151px;width:639px;height:267px;',
			height: 267,width: 639,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:625px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
				{
					text:'По наименованию',
				},
				{
					text:'Для списка ОС',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:625px;height:217px;',
			height: 217,width: 625,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'120',
				},
				{
					text:'Инв. №',
					width:'120',
				},
				{
					text:'Новый срок использ. (УУ)',
					width:'140',
				},
				{
					text:'Факт. срок использ. (УУ)',
					width:'140',
				},
				{
					text:'Ост. срок использ. (УУ)',
					width:'140',
				},
				{
					text:'Новый объем работ (УУ)',
					width:'140',
				},
				{
					text:'Факт. объем работ (УУ)',
					width:'140',
				},
				{
					text:'Ост. объем работ (УУ)',
					width:'140',
				},
				{
					text:'Стоимость (УУ)',
					width:'120',
				},
				{
					text:'Сумма модерн. (УУ)',
					width:'120',
				},
				{
					text:'Факт. аморт. (УУ)',
					width:'120',
				},
				{
					text:'Аморт. за месяц (УУ)',
					width:'120',
				},
				{
					text:'Ост. стоимость (УУ)',
					width:'120',
				},
				{
					text:'% год. аморт. (УУ)',
					width:'80',
				},
				{
					text:'Коэф. ускорения (УУ)',
					width:'80',
				},
				{
					text:'Новый срок использ. (БУ)',
					width:'140',
				},
				{
					text:'Факт. срок использ. (БУ)',
					width:'140',
				},
				{
					text:'Ост. срок использ. (БУ)',
					width:'140',
				},
				{
					text:'Новый объем работ (БУ)',
					width:'140',
				},
				{
					text:'Факт. объем работ (БУ)',
					width:'140',
				},
				{
					text:'Ост. объем работ (БУ)',
					width:'140',
				},
				{
					text:'Стоимость (БУ)',
					width:'140',
				},
				{
					text:'Сумма модерн. (БУ)',
					width:'140',
				},
				{
					text:'в т.ч. хоз. способом (БУ)',
					width:'140',
				},
				{
					text:'Факт. аморт. (БУ)',
					width:'120',
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'120',
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'120',
				},
				{
					text:'% год. аморт. (БУ)',
					width:'80',
				},
				{
					text:'Коэф. ускорения (БУ)',
					width:'80',
				},
				{
					text:'Новый срок использ. (НУ)',
					width:'120',
				},
				{
					text:'Стоимость (НУ)',
					width:'140',
				},
				{
					text:'Сумма модерн. (НУ)',
					width:'140',
				},
				{
					text:'в т.ч. хоз. способом (НУ)',
					width:'140',
				},
				{
					text:'Общая сумма (НУ)',
					width:'120',
				},
				{
					text:'Сумма амортизационной премии (НУ)',
					width:'120',
				},
				{
					text:'Сумма модерн. (ВР)',
					width:'100',
				},
				{
					text:'в т.ч. хоз. способом (ВР)',
					width:'100',
				},
				{
					text:'Сумма модерн. (ПР)',
					width:'100',
				},
				{
					text:'в т.ч. хоз. способом (ПР)',
					width:'100',
				},
				{
					text:'Сумма модернизации (УСН)',
					width:'100',
				},
				{
					text:'Стоимость (ПР)',
					width:'100',
				},
				{
					text:'Факт. аморт. (ПР)',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Вложения во внеоборотные активы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбъектСтроительства',
			text: 'Объект:',
			style: 'position:absolute;left:6px;top:6px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
			style: 'position:absolute;left:85px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьСтоимость',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:310px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:25px;width:625px;height:25px;',
			height: 25,width: 625,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма (УУ):',
			style: 'position:absolute;left:0px;top:6px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Стоимость',
			style: 'position:absolute;left:79px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'УпрВалюта',
			text: 'УпрВалюта',
			style: 'position:absolute;left:204px;top:6px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:625px;height:72px;',
			height: 72,width: 625,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУВнеоборотногоАктива',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:6px;top:29px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУВнеоборотногоАктива',
			style: 'position:absolute;left:79px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаБУ',
			text: 'Сумма (БУ):',
			style: 'position:absolute;left:6px;top:53px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:79px;top:53px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта1',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:53px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьБУХоз',
			text: 'в т.ч. хоз. способом (БУ):',
			style: 'position:absolute;left:269px;top:53px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУХоз',
			style: 'position:absolute;left:404px;top:53px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта2',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:53px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:122px;width:625px;height:119px;',
			height: 119,width: 625,
			items:
			[
				{
					title:'НУ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУВнеоборотногоАктива',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:7px;top:28px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУВнеоборотногоАктива',
			style: 'position:absolute;left:79px;top:28px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНУ',
			text: 'Сумма (НУ):',
			style: 'position:absolute;left:7px;top:52px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:79px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта3',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:52px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта4',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:52px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНУХоз',
			text: 'в т.ч. хоз. способом (НУ):',
			style: 'position:absolute;left:269px;top:52px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУХоз',
			style: 'position:absolute;left:404px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПР',
			text: 'Сумма (ПР):',
			style: 'position:absolute;left:7px;top:76px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:79px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта5',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:76px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта6',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:76px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПРХоз',
			text: 'в т.ч. хоз. способом (ПР):',
			style: 'position:absolute;left:269px;top:76px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПРХоз',
			style: 'position:absolute;left:404px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВР',
			text: 'Сумма (ВР):',
			style: 'position:absolute;left:7px;top:100px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:79px;top:100px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта7',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:100px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта8',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:100px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВРХоз',
			text: 'в т.ч. хоз. способом (ВР):',
			style: 'position:absolute;left:269px;top:100px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВРХоз',
			style: 'position:absolute;left:404px;top:100px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'УСН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтоимостьУСН',
			text: 'Сумма (УСН):',
			style: 'position:absolute;left:6px;top:26px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:79px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:71px;width:624px;height:48px;',
			height: 48,width: 624,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Дата оплаты',
					width:'100',
				},
				{
					text:'Сумма оплаты',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:47px;width:623px;height:24px;',
			items:
			[
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Установить отбор...',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				'-',
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Амортизационная премия',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сумма амортизационной премии указывается в табличном поле "Основные средства"
индивидуально для каждого основного средства.',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатратПоАмортизационнойПремии',
			style: 'position:absolute;left:131px;top:41px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии1',
			style: 'position:absolute;left:131px;top:65px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии2',
			style: 'position:absolute;left:131px;top:89px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии3',
			style: 'position:absolute;left:131px;top:113px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаЗатратПоАмортизационнойПремии',
			text: 'Счет учета затрат:',
			style: 'position:absolute;left:6px;top:41px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии1',
			text: 'Субконто НУ 1:',
			style: 'position:absolute;left:6px;top:65px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии2',
			text: 'Субконто НУ 2:',
			style: 'position:absolute;left:6px;top:89px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии3',
			text: 'Субконто НУ 3:',
			style: 'position:absolute;left:6px;top:113px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включить амортизационную премию в состав расходов',
			style: 'position:absolute;left:334px;top:106px;width:313px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:423px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:423px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВключатьАПВСоставРасходовПриОтраженииМодернизации',
			style: 'position:absolute;left:334px;top:125px;width:313px;height:19px;',
		},
	]
});