Ext.define('Справочники.ОсновныеСредства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:420px;height:320px;',
			height: 320,width: 420,
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
					width:'141',
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
					width:'87',
				},
				{
					text:'Амортизационная группа',
					width:'83',
				},
				{
					text:'Группа ОС',
					width:'100',
				},
				{
					text:'Признак автотранспорта',
					width:'137',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:602px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				'-',
				{
					text:'Групповое добавление',
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