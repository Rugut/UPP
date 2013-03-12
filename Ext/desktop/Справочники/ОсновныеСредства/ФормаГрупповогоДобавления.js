Ext.define('Справочники.ОсновныеСредства.ФормаГрупповогоДобавления',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:414px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Групповое добавление элементов справочника ""Основные средства""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:414px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:14px;top:125px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:160px;top:125px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:14px;top:149px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:160px;top:149px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзготовитель',
			text: 'Изготовитель:',
			style: 'position:absolute;left:14px;top:173px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Изготовитель',
			style: 'position:absolute;left:161px;top:173px;width:245px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыпуска',
			text: 'Дата выпуска (постройки):',
			style: 'position:absolute;left:14px;top:245px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыпуска',
			style: 'position:absolute;left:160px;top:245px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКОФ',
			text: 'ОКОФ:',
			style: 'position:absolute;left:14px;top:293px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКОФ',
			style: 'position:absolute;left:161px;top:293px;width:245px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизационнаяГруппа',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:14px;top:341px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:160px;top:341px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаОС',
			text: 'Группа учета ОС:',
			style: 'position:absolute;left:14px;top:317px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаОС',
			style: 'position:absolute;left:160px;top:317px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автотранспорт',
			style: 'position:absolute;left:14px;top:365px;width:138px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаводскойНомер',
			text: 'Заводской номер:',
			style: 'position:absolute;left:14px;top:197px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаводскойНомер',
			style: 'position:absolute;left:160px;top:197px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПаспорта',
			text: 'Номер паспорта:',
			style: 'position:absolute;left:14px;top:221px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПаспорта',
			style: 'position:absolute;left:160px;top:221px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Присваивать коды с:',
			style: 'position:absolute;left:14px;top:53px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальныйКод',
			style: 'position:absolute;left:160px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСоздаваемыхОбъектов',
			text: 'Количество элементов:',
			style: 'position:absolute;left:14px;top:77px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:160px;top:77px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа',
			text: 'Добавлять в группу:',
			style: 'position:absolute;left:14px;top:29px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Группа',
			style: 'position:absolute;left:160px;top:29px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечныйКод',
			style: 'position:absolute;left:272px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'по:',
			style: 'position:absolute;left:249px;top:53px;width:16px;height:19px;',
		},
	]
});