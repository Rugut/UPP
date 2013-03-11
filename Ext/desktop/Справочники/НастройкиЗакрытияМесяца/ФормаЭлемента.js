Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 587,width: 850,
	iconCls: 'bogus',
	title: 'Настройка закрытия месяца',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:850px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОтчетыРегламентныхОпераций',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'ПереключениеСправкиФормы',
				},
				{
					text:'ДокументыРегламентныхОпераций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:562px;width:850px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:834px;height:521px;',
			height: 521,width: 834,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:4px;width:442px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДействияНастройки',
			style: 'position:absolute;left:93px;top:28px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:55px;width:834px;height:464px;',
			height: 464,width: 834,
			items:
			[
				{
					title:'СводныеНастройки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:430px;',
			height: 430,width: 820,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'РегламентнаяОперация',
				},
				{
					text:'Ответственный',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
				},
			]
		},
					]
				},
				{
					title:'КартаМаршрута',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:20px;width:229px;height:27px;',
			items:
			[
				{
					text:'ИзменитьОтветственного',
				},
			]
		},
					]
				},
				{
					title:'СхемаРасчетНДС',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:26px;top:29px;width:229px;height:27px;',
			items:
			[
				{
					text:'ИзменитьОтветственногоРасчетНДС',
				},
			]
		},
					]
				},
				{
					title:'Ответственные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:526px;top:6px;width:300px;height:430px;',
			height: 430,width: 300,
			items:
			[
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:374px;',
			height: 374,width: 286,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'ГруппыПользователей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:372px;',
			height: 372,width: 286,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПереместитьВлево',
			text: '<',
			style: 'position:absolute;left:498px;top:99px;width:21px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВправо',
			text: '>',
			style: 'position:absolute;left:498px;top:124px;width:21px;height:17px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:487px;height:430px;',
			height: 430,width: 487,
			columns:
			[
				{
					text:'РегламентнаяОперация',
				},
				{
					text:'Ответственный',
				},
			]
		},
					]
				},
				{
					title:'РаспределениеЗатрат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:820px;height:408px;',
			height: 408,width: 820,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидПодразделения',
				},
				{
					text:'Подразделение',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'СпособРаспределения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПроверитьРаспределениеЗатрат',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});