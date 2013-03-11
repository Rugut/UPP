Ext.define('Документы.ОтпускаОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 642,
	iconCls: 'bogus',
	title: 'Отпуска организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:348px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:642px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'ДокументыНачисления',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:375px;width:374px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:626px;height:180px;',
			height: 180,width: 626,
			columns:
			[
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
					text:'ОсвобождатьСтавку',
				},
				{
					text:'ПричинаОтсутствия',
				},
				{
					text:'ДатаС',
				},
				{
					text:'ДатаПо',
				},
				{
					text:'КоличествоДней',
				},
				{
					text:'НапомнитьПоЗавершении',
				},
				{
					text:'ВидДополнительногоОтпуска',
				},
				{
					text:'ДатаНачалаДоп',
				},
				{
					text:'КоличествоДнейДоп',
				},
				{
					text:'РабочийГодС',
				},
				{
					text:'РабочийГодПо',
				},
				{
					text:'Основание',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:626px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подбор',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:414px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:99px;top:216px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				{
					text:'Удалить',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:421px;top:309px;width:83px;height:33px;',
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
			style: 'position:absolute;left:505px;top:309px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:375px;width:268px;height:25px;',
			items:
			[
				{
					text:'ВесьДокумент',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});