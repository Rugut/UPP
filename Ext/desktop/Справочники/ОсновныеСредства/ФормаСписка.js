Ext.define('Справочники.ОсновныеСредства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:677px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:495px;height:320px;',
			height: 320,width: 495,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Инв. №',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Полное наименование',
					width:'280',
				},
				{
					text:'Изготовитель',
					width:'100',
				},
				{
					text:'Номер паспорта (регистрационный)',
					width:'100',
				},
				{
					text:'Заводской номер',
					width:'100',
				},
				{
					text:'Дата выпуска (постройки)',
					width:'84',
				},
				{
					text:'Код по ОКОФ',
					width:'70',
				},
				{
					text:'Амортизационная группа',
					width:'100',
				},
				{
					text:'Группа ОС',
					width:'100',
				},
				{
					text:'Признак автотранспорта',
					width:'70',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'Свойства',
				},
				{
					text:'Категории',
				},
				'-',
				{
					text:'Групповое добавление',
				},
				'-',
				'-',
				{
					text:'Зарегистрированные оплаты основных средств (УСН)',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
	]
});