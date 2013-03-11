Ext.define('Документы.РегистрацияРазовыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 513,width: 712,
	iconCls: 'bogus',
	title: 'Регистрация разовых начислений сотрудникам организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:484px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:584px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:461px;width:608px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:484px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие3',
				},
				{
					text:'СоздатьЗарплатаКВыплатеВычеты',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СоздатьЗарплатаКВыплате',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'НачисленияСписокРаботников',
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
				{
					text:'Подменю3',
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
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ВвестиПоказателиДляРасчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДопНачисленияСписокРаботников',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:712px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
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
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:696px;height:334px;',
			height: 334,width: 696,
			items:
			[
				{
					title:'Начисления',
				},
				{
					title:'ДополнительныеНачисления',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:491px;top:419px;width:83px;height:33px;',
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
			style: 'position:absolute;left:575px;top:419px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:488px;width:316px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'Разделитель',
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
					text:'ВесьДокумент',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
	]
});