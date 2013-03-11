Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 726,width: 758,
	iconCls: 'bogus',
	title: 'Электронные представления регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:106px;top:58px;width:644px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:108px;width:644px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:674px;width:644px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:758px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'РазделительПоказатьОтправки',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Проверить',
				},
				{
					text:'Отправка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Просмотр',
				},
				{
					text:'Действие',
				},
				{
					text:'ПоказатьРезультатНеПринят',
				},
				{
					text:'ПолучитьРезультат',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПоказатьРезультатСдан',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПоказатьОтправки',
				},
				{
					text:'Действие',
				},
				{
					text:'ЦиклыОбмена',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:701px;width:758px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:106px;top:186px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:511px;top:186px;width:59px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:106px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИмпорта',
			style: 'position:absolute;left:324px;top:33px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:106px;top:160px;width:644px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:212px;width:742px;height:28px;',
			height: 28,width: 742,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:225px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПолучателя',
			style: 'position:absolute;left:106px;top:134px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:232px;top:134px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:240px;width:742px;height:423px;',
			height: 423,width: 742,
			items:
			[
				{
					title:'СтраницаКомплектПФР',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:742px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:43px;width:742px;height:380px;',
			height: 380,width: 742,
			columns:
			[
				{
					text:'Номер',
				},
				{
					text:'Имя',
				},
				{
					text:'Тип',
				},
				{
					text:'Данные',
				},
			]
		},
					]
				},
				{
					title:'СтраницаПрочаяОтчетность',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:51px;width:742px;height:261px;',
			height: 261,width: 742,
			items:
			[
				{
					title:'СтраницаТекст',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеТекст',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:261px;',
		},
					]
				},
				{
					title:'СтраницаXML',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:98px;top:25px;width:644px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:312px;width:742px;height:111px;',
			height: 111,width: 742,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлПояснительнойЗаписки',
			style: 'position:absolute;left:296px;top:36px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлАудиторскогоЗаключения',
			style: 'position:absolute;left:296px;top:64px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФайлЗаявленияРевизионногоСоюза',
			style: 'position:absolute;left:296px;top:92px;width:446px;height:19px;',
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