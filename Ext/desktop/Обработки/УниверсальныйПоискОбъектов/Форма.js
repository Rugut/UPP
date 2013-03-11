Ext.define('Обработки.УниверсальныйПоискОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 639,
	iconCls: 'bogus',
	title: 'Поиск объектов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:627px;height:407px;',
			height: 407,width: 627,
			items:
			[
				{
					title:'ОсновнаяСтраница',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнформацияДляПоиска',
			style: 'position:absolute;left:84px;top:24px;width:459px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:116px;width:627px;height:89px;',
			height: 89,width: 627,
			columns:
			[
				{
					text:'ИмяОбъекта',
				},
				{
					text:'ОписаниеТаблицыПоиска',
				},
				{
					text:'ПоляПоиска',
				},
				{
					text:'ДополнительныеОграничения',
				},
				{
					text:'ТаблицаПоиска',
				},
				{
					text:'ПолеСвязки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:92px;width:627px;height:24px;',
			items:
			[
				{
					text:'НастройкаПостроителя',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтменитьПометкуВсехОбластейПоиска',
				},
				{
					text:'ПометитьВсеОбластиПоиска',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:210px;width:627px;height:197px;',
			height: 197,width: 627,
			items:
			[
				{
					title:'СтраницаОтображенияРезультатов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:152px;',
			height: 152,width: 627,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:627px;height:24px;',
			items:
			[
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
					text:'ЗакрытьСписок',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДетальныйПоиск',
				},
				{
					text:'РаскрытьСписок',
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
			xtype: 'button',
			name: 'Найти',
			text: 'Найти',
			style: 'position:absolute;left:547px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					text:'ЗагрузитьНастройку',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'СохранениеНастроекПользователя',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:448px;width:639px;height:25px;',
			height: 25,width: 639,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
					]
				},
			]
		},
	]
});