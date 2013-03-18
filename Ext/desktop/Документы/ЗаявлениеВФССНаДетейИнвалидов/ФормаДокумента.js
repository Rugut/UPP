Ext.define('Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление в ФСС о возмещении выплат родителям детей-инвалидов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:419px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:507px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:599px;top:33px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:641px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:796px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:900px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:884px;height:414px;',
			height: 414,width: 884,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:24px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:870px;height:352px;',
			height: 352,width: 870,
			columns:
			[
				{
					text:'№',
					width:'25',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Статус',
					width:'120',
				},
				{
					text:'Среднедневной заработок',
					width:'150',
				},
			]
		},
					]
				},
				{
					title:'Данные страхователя',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:12px;top:276px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:119px;top:276px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:444px;top:276px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:554px;top:276px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:53px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:146px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:261px;top:53px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:379px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:494px;top:53px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:599px;top:53px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:15px;top:27px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:258px;top:27px;width:618px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес:',
			style: 'position:absolute;left:14px;top:79px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:59px;top:79px;width:817px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:366px;width:82px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:59px;top:133px;width:611px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСчета',
			text: '№ счета:',
			style: 'position:absolute;left:683px;top:133px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСчета',
			style: 'position:absolute;left:740px;top:133px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование:',
			style: 'position:absolute;left:22px;top:159px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:113px;top:159px;width:430px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:550px;top:159px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:582px;top:159px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:683px;top:159px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:740px;top:159px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка1',
			text: 'Банк:',
			style: 'position:absolute;left:14px;top:133px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета1',
			text: '№ лицевого счета:',
			style: 'position:absolute;left:14px;top:185px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:113px;top:185px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПособий',
			text: 'Сумма пособий:',
			style: 'position:absolute;left:226px;top:81px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПособий',
			style: 'position:absolute;left:312px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСтраниц',
			text: 'Количество страниц:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:138px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Контактный телефон:',
			style: 'position:absolute;left:419px;top:57px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:535px;top:57px;width:120px;height:19px;',
		},
	]
});