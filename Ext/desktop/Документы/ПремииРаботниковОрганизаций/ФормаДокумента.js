Ext.define('Документы.ПремииРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 652,
	iconCls: 'bogus',
	title: 'Премии сотрудникам организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:472px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧислоМесяцев',
			style: 'position:absolute;left:424px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаБП',
			style: 'position:absolute;left:96px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияБП',
			style: 'position:absolute;left:226px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:170px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:194px;width:636px;height:234px;',
			height: 234,width: 636,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Авторасчет',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Результат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'РассчитатьДокумент',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'НаОсновании',
				},
				{
					text:'СоздатьЗарплатаКВыплатеВычеты',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ВвестиПоказателиДляРасчета',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'РассчитатьРаботника',
				},
				{
					text:'Действие6',
				},
				{
					text:'СоздатьЗарплатаКВыплате',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:247px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:434px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:515px;top:434px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:300px;width:636px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
			]
		},
	]
});