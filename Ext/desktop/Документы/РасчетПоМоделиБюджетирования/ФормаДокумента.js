Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 751,
	iconCls: 'bogus',
	title: 'Расчет по модели бюджетирования',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчета',
			style: 'position:absolute;left:121px;top:59px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:121px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:751px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Расчет',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПросмотрОпераций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:751px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:735px;height:219px;',
			height: 219,width: 735,
			items:
			[
				{
					title:'Детально',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:182px;top:30px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоПериодам',
			style: 'position:absolute;left:182px;top:54px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФормулаКоличество',
			style: 'position:absolute;left:514px;top:30px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФормулаСумма',
			style: 'position:absolute;left:514px;top:54px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоЦФО',
			style: 'position:absolute;left:182px;top:102px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоЦФО',
			style: 'position:absolute;left:514px;top:102px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоПроектам',
			style: 'position:absolute;left:182px;top:126px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоПроектам',
			style: 'position:absolute;left:514px;top:126px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоКонтрагентам',
			style: 'position:absolute;left:182px;top:150px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоКонтрагентам',
			style: 'position:absolute;left:514px;top:150px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоНоменклатуре',
			style: 'position:absolute;left:182px;top:174px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоНоменклатуре',
			style: 'position:absolute;left:514px;top:174px;width:212px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:175px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПредыдущаяСтрока',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'СледующаяСтрока',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоВалюте',
			style: 'position:absolute;left:182px;top:78px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоВалюте',
			style: 'position:absolute;left:514px;top:78px;width:212px;height:19px;',
		},
					]
				},
				{
					title:'Таблица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:720px;height:169px;',
			height: 169,width: 720,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'ФормулаСумма',
				},
				{
					text:'ФормулаКоличество',
				},
				{
					text:'ВидИзмененияПоВалюте',
				},
				{
					text:'ЗначениеИзмененияПоВалюте',
				},
				{
					text:'ЗначениеИзмененияПоПериодам',
				},
				{
					text:'ВидИзмененияПоЦФО',
				},
				{
					text:'ЗначениеИзмененияПоЦФО',
				},
				{
					text:'ВидИзмененияПоПроектам',
				},
				{
					text:'ЗначениеИзмененияПоПроектам',
				},
				{
					text:'ВидИзмененияПоКонтрагентам',
				},
				{
					text:'ЗначениеИзмененияПоКонтрагентам',
				},
				{
					text:'ВидИзмененияПоНоменклатуре',
				},
				{
					text:'ЗначениеИзмененияПоНоменклатуре',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:720px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Комментарий',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:720px;height:187px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:191px;top:419px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:526px;top:419px;width:217px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:121px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:221px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:366px;top:33px;width:377px;height:159px;',
			height: 159,width: 377,
			items:
			[
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:363px;height:102px;',
			height: 102,width: 363,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ПредставлениеИсточника',
				},
				{
					text:'Код',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'ДополнительныеИсточникиДанных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:363px;height:102px;',
			height: 102,width: 363,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ИсточникДанных',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
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
			name: 'ОсновнойИсточникДанных',
			style: 'position:absolute;left:121px;top:108px;width:236px;height:19px;',
		},
	]
});