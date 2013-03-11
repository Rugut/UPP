Ext.define('Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 728,
	iconCls: 'bogus',
	title: 'Инвентаризация расчетов с контрагентами',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:496px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
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
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:728px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:713px;height:303px;',
			height: 303,width: 713,
			items:
			[
				{
					title:'ДебиторскаяЗадолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'ЗаполнитьАктИзДт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
				},
				{
					text:'СчетРасчетов',
				},
				{
					text:'Всего',
				},
				{
					text:'Подтверждено',
				},
				{
					text:'НеПодтверждено',
				},
				{
					text:'ИстекСрокДавности',
				},
				{
					text:'ВидЗадолженности',
				},
			]
		},
					]
				},
				{
					title:'КредиторскаяЗадолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'ЗаполнитьАктИзКт',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
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
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
				},
				{
					text:'СчетРасчетов',
				},
				{
					text:'Всего',
				},
				{
					text:'Подтверждено',
				},
				{
					text:'НеПодтверждено',
				},
				{
					text:'ИстекСрокДавности',
				},
				{
					text:'ВидЗадолженности',
				},
			]
		},
					]
				},
				{
					title:'СчетаРасчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:699px;height:229px;',
			height: 229,width: 699,
			columns:
			[
				{
					text:'Счет',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:699px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаЗаполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:146px;width:699px;height:130px;',
			height: 130,width: 699,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'Председатель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:122px;width:699px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеВид',
			style: 'position:absolute;left:88px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеДата',
			style: 'position:absolute;left:435px;top:26px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНомер',
			style: 'position:absolute;left:285px;top:26px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаИнвентаризации',
			style: 'position:absolute;left:88px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияИнвентаризации',
			style: 'position:absolute;left:285px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаИнвентаризации',
			style: 'position:absolute;left:88px;top:74px;width:617px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:395px;width:616px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:105px;top:371px;width:616px;height:19px;',
		},
	]
});