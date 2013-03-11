Ext.define('Обработки.КлиентБанк.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 787,
	iconCls: 'bogus',
	title: 'Клиент банка (загрузка / выгрузка платежных документов)',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:7px;width:774px;height:565px;',
			height: 565,width: 774,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие9',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Выгружать',
				},
				{
					text:'Ссылка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'Контрагент',
				},
				{
					text:'КонтрагентНомерСчета',
				},
				{
					text:'НазначениеПлатежа',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'ОписаниеОшибок',
				},
				{
					text:'ОрганизацияНомерСчета',
				},
				{
					text:'ВидПлатежа',
				},
				{
					text:'ОчередностьПлатежа',
				},
				{
					text:'ТекстПлательщика',
				},
				{
					text:'ТекстПолучателя',
				},
				{
					text:'ИННПлательщика',
				},
				{
					text:'КПППлательщика',
				},
				{
					text:'ИННПолучателя',
				},
				{
					text:'КПППолучателя',
				},
				{
					text:'КодБК',
				},
				{
					text:'КодОКАТО',
				},
				{
					text:'ПоказательДаты',
				},
				{
					text:'ПоказательНомера',
				},
				{
					text:'ПоказательОснования',
				},
				{
					text:'ПоказательТипа',
				},
				{
					text:'ПоказательПериода',
				},
				{
					text:'СтатусСоставителя',
				},
				{
					text:'Организация',
				},
				{
					text:'ОрганизацияКратко',
				},
				{
					text:'ОрганизацияПеречислениеНалога',
				},
				{
					text:'ОрганизацияИНН',
				},
				{
					text:'ОрганизацияКПП',
				},
				{
					text:'ОрганизацияСчет',
				},
				{
					text:'СуммаБезКопеек',
				},
				{
					text:'ОрганизацияТекстКорреспондента',
				},
				{
					text:'ОрганизацияТекстНазначения',
				},
				{
					text:'ОрганизацияБИКБанка',
				},
				{
					text:'ОрганизацияБанк',
				},
				{
					text:'ОрганизацияРасчСчет',
				},
				{
					text:'ОрганизацияГородБанка',
				},
				{
					text:'ОрганизацияБанкДляРасчетов',
				},
				{
					text:'ОрганизацияГородРЦБанка',
				},
				{
					text:'ОрганизацияБИКРЦБанка',
				},
				{
					text:'ОрганизацияКоррСчетРЦБанка',
				},
				{
					text:'КонтрагентКратко',
				},
				{
					text:'КонтрагентИНН',
				},
				{
					text:'КонтрагентКПП',
				},
				{
					text:'КонтрагентСчет',
				},
				{
					text:'КонтрагентБанк',
				},
				{
					text:'КонтрагентРасчСчет',
				},
				{
					text:'КонтрагентГородБанка',
				},
				{
					text:'КонтрагентБанкДляРасчетов',
				},
				{
					text:'КонтрагентГородРЦБанка',
				},
				{
					text:'КонтрагентБИКБанка',
				},
				{
					text:'КонтрагентБИКРЦБанка',
				},
				{
					text:'КонтрагентКоррСчетРЦБанка',
				},
				{
					text:'КонтрагентТекстКорреспондента',
				},
				{
					text:'КонтрагентТекстНазначения',
				},
				{
					text:'СрокАкцепта',
				},
				{
					text:'УсловиеОплаты1',
				},
				{
					text:'ДатаОтсылкиДок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:200px;top:220px;width:380px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачПериода',
			style: 'position:absolute;left:113px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонПериода',
			style: 'position:absolute;left:241px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлВыгрузки',
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыгрузить',
			text: 'Выгрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОВыгрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СоздатьКотрагентов',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие5',
				},
				{
					text:'СоздатьКотрагентов',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Загружать',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'СуммаДокумента1',
				},
				{
					text:'Поступило',
				},
				{
					text:'Списано',
				},
				{
					text:'СчетОрганизации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'СчетКонтрагента',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Договор',
				},
				{
					text:'НазначениеПлатежа',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'Операция',
				},
				{
					text:'ОписаниеОшибок',
				},
				{
					text:'СтатьяДДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:187px;width:228px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлЗагрузки',
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПрочитатьДанныеИзФайла',
			text: 'Прочитать данные из файла',
			style: 'position:absolute;left:113px;top:87px;width:187px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация1',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации1',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОЗагрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Настройка',
				},
			]
		},
					]
				},
			]
		},
	]
});