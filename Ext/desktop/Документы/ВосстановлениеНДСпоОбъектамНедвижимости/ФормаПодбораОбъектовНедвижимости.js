Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимости',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:538px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор объектов недвижимости',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:538px;height:25px;',
			items:
			[
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:79px;width:522px;height:191px;',
			height: 191,width: 522,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Объект недвижимости',
					width:'120',
				},
				{
					text:'Дата ввода в эксплуатацию (БУ)',
					width:'80',
				},
				{
					text:'Дата начала начисления амортизации (НУ)',
					width:'80',
				},
				{
					text:'Стоимость объекта недвижимости',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГруппыУчетаОС',
			text: 'Группы учета ОС:',
			style: 'position:absolute;left:8px;top:7px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппыУчетаОС',
			style: 'position:absolute;left:103px;top:7px;width:427px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:55px;width:522px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				'-',
				{
					text:'Очистить',
				},
				{
					text:'Снять выделение всех',
				},
				'-',
				{
					text:'Выделить все',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать только объекты недвижимости, введенные в эксплуатацию в 2006 году',
			style: 'position:absolute;left:8px;top:31px;width:440px;height:19px;',
		},
	]
});