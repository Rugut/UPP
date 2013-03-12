Ext.define('Обработки.КонструкторСпецификаций.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конструктор спецификаций',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:408px;',
			height: 408,width: 764,
			items:
			[
				{
					title:'Конструктор спецификации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:374px;height:336px;',
			height: 336,width: 374,
			columns:
			[
				{
					text:'Вид норматива',
					width:'42',
				},
				{
					text:'Наименование',
					width:'175',
				},
				{
					text:'Характеристика',
					width:'129',
				},
				{
					text:'Вид номенклатуры',
					width:'100',
				},
				{
					text:'Количество',
					width:'66',
				},
				{
					text:'Единица',
					width:'47',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Вид воспроизводства',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'125',
				},
				{
					text:'Формула',
					width:'68',
				},
				{
					text:'Указание норматива',
					width:'111',
				},
				{
					text:'Списание комплектующей',
					width:'138',
				},
				{
					text:'Свойства',
					width:'80',
				},
				{
					text:'Номер строки спецификации',
					width:'64',
				},
				{
					text:'Исх. спецификация',
					width:'84',
				},
				{
					text:'Вид норматива',
					width:'71',
				},
				{
					text:'Есть спецификации',
					width:'76',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:374px;height:24px;',
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Полуфабрикаты',
				},
				{
					text:'Дерево спецификаций',
				},
				{
					text:'Покупные изделия',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Отчет по дереву спецификаций',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:207px;width:370px;height:175px;',
			height: 175,width: 370,
			items:
			[
				{
					title:'Спецификации и характеристики',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:98px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Версия',
					width:'40',
				},
				{
					text:'Наименование',
					width:'157',
				},
				{
					text:'Активная',
					width:'20',
				},
				{
					text:'Вид',
					width:'70',
				},
				{
					text:'Состояние',
					width:'76',
				},
				{
					text:'Дата утверждения',
					width:'84',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:66px;',
			height: 66,width: 370,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Характеристика',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:72px;width:369px;height:26px;',
			items:
			[
				{
					text:'Печать спецификации',
				},
				{
					text:'Создать версию',
				},
				{
					text:'Версии спецификации',
				},
				{
					text:'Установить основную спецификацию на рабочую дату',
				},
				'-',
				{
					text:'Установить основную спецификацию на выбранную дату',
				},
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:369px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Печать спецификации',
				},
				{
					text:'Уровень вниз',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Установить основную спецификацию на рабочую дату',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Установить основную спецификацию на выбранную дату',
				},
				{
					text:'Версии спецификации',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				{
					text:'Создать версию',
				},
				{
					text:'Новая группа',
				},
				'-',
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Иерархический просмотр',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:151px;',
			height: 151,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Версия',
					width:'40',
				},
				{
					text:'Наименование',
					width:'172',
				},
				{
					text:'Активная',
					width:'20',
				},
				{
					text:'Вид',
					width:'70',
				},
				{
					text:'Состояние',
					width:'96',
				},
				{
					text:'Дата утверждения',
					width:'130',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:22px;width:370px;height:179px;',
			height: 179,width: 370,
			items:
			[
				{
					title:'Дерево номенклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:107px;width:370px;height:72px;',
			height: 72,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'70',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Полное наименование',
					width:'100',
				},
				{
					text:'Артикул ',
					width:'90',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'Наименование',
					width:'217',
				},
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:370px;height:154px;',
			height: 154,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Полное наименование',
					width:'100',
				},
				{
					text:'Артикул ',
					width:'90',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выводить спецификации на дату:',
			style: 'position:absolute;left:6px;top:6px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разворачивать дерево спецификаций',
			style: 'position:absolute;left:384px;top:51px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В списках чередовать цвета строк',
			style: 'position:absolute;left:6px;top:74px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить возвратные отходы',
			style: 'position:absolute;left:384px;top:95px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Редактировать в диалоге',
			style: 'position:absolute;left:6px;top:51px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запрашивать подтверждение при установке основной спецификации',
			style: 'position:absolute;left:6px;top:279px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить выходные изделия',
			style: 'position:absolute;left:384px;top:73px;width:372px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыводитьДляНоменклатуры',
			text: 'Выводить в доп. информацию для номенклатуры:',
			style: 'position:absolute;left:6px;top:120px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыводитьДляНоменклатуры',
			style: 'position:absolute;left:274px;top:120px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать дерево номенклатуры',
			style: 'position:absolute;left:6px;top:96px;width:378px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Конечная продукция:',
			style: 'position:absolute;left:6px;top:303px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечнаяПродукция',
			style: 'position:absolute;left:129px;top:303px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Конечная характеристика продукции:',
			style: 'position:absolute;left:6px;top:327px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечнаяХарактеристикаПродукции',
			style: 'position:absolute;left:129px;top:327px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоУровней',
			text: 'Количество уровней разворота дерева:',
			style: 'position:absolute;left:6px;top:144px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоУровней',
			style: 'position:absolute;left:274px;top:144px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Устанавливать спецификацию как основную',
			style: 'position:absolute;left:6px;top:257px;width:378px;height:19px;',
		},
					]
				},
			]
		},
	]
});